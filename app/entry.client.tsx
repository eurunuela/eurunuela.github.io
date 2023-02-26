import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

hydrate(<RemixBrowser />, document);

reportWebVitals(sendToVercelAnalytics);
