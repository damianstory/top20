export default function Footer() {
  return (
    <footer className="py-20 md:py-20 text-center bg-transparent relative">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-2">
          Want to help fund future student micro grants?
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
          Email myBlueprint&apos;s Director of Special Projects{" "}
          <a 
            href="mailto:damian.matheson@myblueprint.ca" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            damian.matheson@myblueprint.ca
          </a>
        </p>
      </div>
    </footer>
  );
} 