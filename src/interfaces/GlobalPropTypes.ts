import * as H from "history";

export interface RouteComponentProps {
  match: match;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

interface match {
  isExact: boolean;
  path: string;
  url: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
