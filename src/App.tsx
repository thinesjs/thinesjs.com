import {
    MessageSquare,
    Flag,
    BadgeCheck,
    Github,
    Linkedin,
} from "lucide-react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");

    const handleOpenDialog = (title: string) => {
        setDialogTitle(title);
        setDialogOpen(true);
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-8 md:p-16">
            <div className="mx-auto max-w-3xl space-y-20">
                <header className="space-y-1 flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-medium">
                            thines jai shankar
                        </h1>
                        <p className="text-muted-foreground mt-3">
                            just imagine there is some inspirational quote here
                            🚀
                        </p>
                    </div>
                    <ModeToggle />
                </header>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        Part of the journey...
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Wanted to play some games, but buying them? Not an
                        option. So where do we go? The torrenting sites, of
                        course. But wait—how does this even work? There were
                        these massive forums with thousands of people sharing
                        links. But again—how does that work? Discovered ZenForo,
                        vBulletin, all powered by the classic PHP. Go back, what
                        if... we host our{" "}
                        <a
                            className="text-blue-500 hover:text-blue-400"
                            href="https://i.ibb.co/whwMRLmx/Screenshot-2025-08-04-at-10-07-18-PM.png"
                            target="_blank"
                        >
                            own torrent search engine
                        </a>
                        . Whats stopping us? Then came 000ᴡebhost, Freeпom
                        domains and FileZilla. You know what's next.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">In the present</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Minutes gone, hours gone, days gone, months gone, years
                        gone, but same stuff. One at a time, one step at a time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        My GitHub bio reads{" "}
                        <i>
                            "i come up with a silly problem and make silly
                            solutions for it"
                        </i>
                        . You figure out the rest.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        Some of my works along the way
                    </h2>
                    <div className="space-y-6">
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className="space-y-1">
                                    <h3 className="font-medium">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {project.description}
                                    </p>
                                    {project.links.map((link, linkIndex) => {
                                        return (
                                            <Button
                                                key={linkIndex}
                                                variant="link"
                                                className="px-0 text-blue-500 hover:text-blue-400"
                                                disabled={link.disabled}
                                                onClick={() =>
                                                    link.url && !link.disabled
                                                        ? window.open(
                                                              link.url,
                                                              "_blank"
                                                          )
                                                        : undefined
                                                }
                                            >
                                                <link.icon className="mr-2 h-4 w-4" />{" "}
                                                {link.text}
                                            </Button>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        Get help with my works
                    </h2>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="font-medium">Support & Contact</h3>
                            <p className="text-muted-foreground">
                                Need help or have questions?
                            </p>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                onClick={() =>
                                    handleOpenDialog("Contact Information")
                                }
                            >
                                <MessageSquare className="mr-2 h-4 w-4" />{" "}
                                Contact Me
                            </Button>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium">Report Abuse</h3>
                            <p className="text-muted-foreground">
                                Report any abusive or inappropriate content.
                            </p>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                onClick={() => handleOpenDialog("Report Abuse")}
                            >
                                <Flag className="mr-2 h-4 w-4" /> Report Issue
                            </Button>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium">Copyright Claims</h3>
                            <p className="text-muted-foreground">
                                Report copyright infringement or IP violations.
                            </p>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                onClick={() =>
                                    handleOpenDialog("Copyright Claim")
                                }
                            >
                                <BadgeCheck className="mr-2 h-4 w-4" /> Submit
                                Claim
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">The road ahead</h2>
                    <p className="text-muted-foreground">
                        Whether you're here to check out my latest work or just
                        to say hello, I'm glad you stopped by! 👋🏽 Join me on
                        this journey of learning, growing, and creating. You can
                        find more of what I'm up to on GitHub and LinkedIn.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() =>
                                window.open(
                                    "https://github.com/thinesjs",
                                    "_blank"
                                )
                            }
                        >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/thines-jai-shankar-5780bb234/",
                                    "_blank"
                                )
                            }
                        >
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                    </div>
                </section>
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{dialogTitle}</DialogTitle>
                        <DialogDescription>
                            For any questions or concerns, please contact me via
                            email at <i>&lt;this_root_domain&gt;</i>@gmail.com.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default App;
