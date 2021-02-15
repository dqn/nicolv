export type NicoliveApiResponse<Data> =
  | {
      meta: {
        status: 200;
        errorCode: "OK";
      };
      data: Data;
    }
  | {
      meta: {
        status: 401;
        errorCode: "UNAUTHORIZED";
      };
    }
  | {
      meta: {
        status: 404;
        errorCode: "NOT_FOUND";
        errorMessage: string;
      };
    }
  | {
      meta: {
        status: 500;
        errorCode: "INTERNAL_SERVER_ERROR";
      };
    }
  | {
      meta: {
        status: 503;
        errorCode: "SERVER_ERROR";
      };
    };
