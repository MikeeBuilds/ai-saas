import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
    return <SignIn path="/sign-up" routing="path" />;
    }