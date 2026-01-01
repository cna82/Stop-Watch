// Footer comp
const Footer = () => {
    return (
        <footer className="h-15 fixed bottom-0 -mb-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl px-6 py-3 text-center text-sm font-medium text-foreground/80 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl">
            Made with ❤️ by Sina Rahimi © {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
