import Link from "next/link";
import { FileSearch, AlertTriangle, HelpCircle, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-foreground">404 - Not Found</h1>
        <p className="text-xl text-muted-foreground">Oops! The resource you&apos;re looking for doesn&apos;t exist.</p>

        <div className="flex justify-center space-x-8">
          <FileSearch className="w-16 h-16 text-primary animate-bounce-delay-1" />
          <AlertTriangle className="w-16 h-16 text-destructive animate-bounce-delay-2" />
          <HelpCircle className="w-16 h-16 text-secondary-foreground animate-bounce-delay-3" />
          <RefreshCw className="w-16 h-16 text-accent animate-bounce-delay-4" />
        </div>

        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

