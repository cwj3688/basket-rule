export function Footer() {
    return (
        <footer className="border-t bg-muted/50 py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} BasketRule. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                    Helping basketball players understand the game better.
                </p>
            </div>
        </footer>
    );
}
