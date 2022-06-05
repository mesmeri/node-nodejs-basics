export const parseEnv = () => {
  const vars = Object.entries(process.env);
  const rss_vars = vars.reduce((acc, item) => {
    if (item[0].startsWith("RSS_")) {
      acc.push(`${item[0]}=${item[1]}`);
    }

    return acc;
  }, []);

  console.log(rss_vars.join("; "));
};

parseEnv();
