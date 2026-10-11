import "dotenv/config"; // oxlint-disable-line no-unassigned-import

type Config = {
  SITE_URL: string;
  SITE_TITLE: string;
  SITE_DESCRIPTION?: string;
};

const loadConfig = (): Config => {
  const {
    CALLING_CARD_SITE_URL = "http://localhost:4321",
    CALLING_CARD_SITE_TITLE = "calling-card",
    CALLING_CARD_SITE_DESCRIPTION,
  } = process.env;

  return {
    SITE_URL: CALLING_CARD_SITE_URL,
    SITE_TITLE: CALLING_CARD_SITE_TITLE,
    SITE_DESCRIPTION: CALLING_CARD_SITE_DESCRIPTION,
  };
};

export default loadConfig();
