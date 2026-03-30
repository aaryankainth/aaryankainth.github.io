window.addEventListener("pageshow", (event) => {
    // If the page is loaded from the bfcache (persisted), reset classes
    if (event.persisted) {
        document.body.classList.remove("fade-out");
    }
    document.body.classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", () => {
    // fade out before navigating
    document.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");
        
        // Skip external links, hash links, and current page links
        if (!href || 
            href.startsWith("http") || 
            href.startsWith("#") || 
            href === window.location.pathname ||
            href === "index.html" && window.location.pathname.endsWith("index.html")
        ) return;

        link.addEventListener("click", e => {
            // Check if it's a standard left-click without modifiers
            if (e.button !== 0 || e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return;

            e.preventDefault();
            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            setTimeout(() => { 
                window.location.href = href; 
            }, 400);
        });
    });
});
