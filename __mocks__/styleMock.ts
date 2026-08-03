const classes = new Proxy(
  {} as Record<string, string>,
  {
    get: (_target, key) => (key === "__esModule" ? false : String(key)),
  },
);

export default classes;
