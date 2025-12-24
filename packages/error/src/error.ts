export interface ErrorData<Code extends string, Status extends number> {
  status: Status;
  code: Code;
  message: string;
  hint?: string;
  description?: string;
  reason?: string;
  [key: string]: any;
}

export type ErrorRecord<Code extends string, Status extends number> = {
  object: 'error';
  data: ErrorData<Code, Status>;
  toResponse: () => ErrorData<Code, Status> & { object: 'error'; ok: false };
} & ((extension?: Partial<ErrorData<Code, Status>>) => ErrorRecord<Code, Status>);

export let createError = <Code extends string, Status extends number>(
  data: ErrorData<Code, Status>
): ErrorRecord<Code, Status> => {
  return Object.assign(
    (extension: Partial<ErrorData<Code, Status>> = {}): ErrorRecord<Code, Status> =>
      createError({
        ...data,
        ...extension
      }),
    {
      object: 'error' as const,
      data,
      toResponse: () => ({ object: 'error' as const, ok: false as const, ...data })
    }
  );
};

export class ServiceError<InnerError extends ErrorRecord<any, any>> extends Error {
  object = 'ServiceError' as const;

  private _parent: Error | null = null;

  public get parent() {
    return this._parent;
  }

  constructor(private readonly error: InnerError) {
    super(error.data.message);
  }

  setParent(parent: Error) {
    this._parent = parent;
    return this;
  }

  get data() {
    return this.error.data;
  }

  toResponse() {
    return this.error.toResponse();
  }

  static fromResponse(raw: ErrorData<any, any>) {
    let data = raw;
    delete data.ok;
    delete data.object;

    return new ServiceError(createError(data));
  }
}

export let isServiceError = (e: any): e is ServiceError<any> => {
  return e?.object === 'ServiceError' || e?.object === 'ErrorRecord';
};
