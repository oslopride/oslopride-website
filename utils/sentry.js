import * as Sentry from "@sentry/node";

let initialized = false;
const PROD_HOST = "www.oslopride.no";
const isProd = process.env.NODE_ENV === "production";

export function initializeSentry(ctx) {
  if (!initialized && isProd) {
    // Initialize sentry
    initialized = true;

    const sentryOptions = {
      dsn: process.env.SENTRY_DSN,
      release: process.env.buildId,
      maxBreadcrumbs: 50,
      attachStacktrace: true
    };

    Sentry.init(sentryOptions);

    const host = process.browser ? window.location.host : ctx.req.headers.host;

    Sentry.configureScope(scope => {
      scope.setTag("ssr", !process.browser);
      scope.setTag("production", host === PROD_HOST);
      scope.setExtra("host", host);
    });
  }
}

export default function logError(error, ctx) {
  if (initialized && isProd) {
    Sentry.configureScope(scope => {
      if (error.message) {
        scope.setFingerprint([error.message]);
      }

      if (error.statusCode) {
        scope.setExtra("statusCode", error.statusCode);
      }

      if (ctx) {
        const { req, res, errorInfo, query, pathname } = ctx;

        if (res && res.statusCode) {
          scope.setExtra("statusCode", res.statusCode);
        }

        if (process.browser) {
          scope.setExtra("query", query);
          scope.setExtra("pathname", pathname);
        } else {
          scope.setExtra("url", req.url);
          scope.setExtra("method", req.method);
          scope.setExtra("headers", req.headers);
          scope.setExtra("params", req.params);
          scope.setExtra("query", req.query);
        }
      }
    });
    Sentry.captureException(error);
  } else {
    console.error(error);
  }
}
