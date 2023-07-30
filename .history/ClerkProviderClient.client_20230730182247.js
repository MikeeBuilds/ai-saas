// ClerkProviderClient.client.js
import { ClerkProvider } from "@clerk/clerk-react";

export default function ClerkProviderClient({ children, ...props }) {
  return <ClerkProvider {...props}>{children}</ClerkProvider>;
}
