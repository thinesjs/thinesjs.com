import "./App.css";
import { MessageSquare, Github, Linkedin } from "lucide-react";
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
                <header className="flex justify-between items-center">
                    <h1 className="text-2xl font-medium">thines jai shankar</h1>
                    <ModeToggle />
                </header>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">Part of the journey</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Somewhere along the way with a laptop, with the power of
                        softwares and{" "}
                        <a
                            className="text-blue-500 hover:text-blue-400"
                            href="https://i.ibb.co/whwMRLmx/Screenshot-2025-08-04-at-10-07-18-PM.png"
                            target="_blank"
                        >
                            asking people for codes
                        </a>{" "}
                        and waiting hours for the FTP file transfer to
                        complete...
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">In the present</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        My GitHub bio reads{" "}
                        <a
                            className="text-muted-foreground/70"
                            href="https://github.com/thinesjs"
                            target="_blank"
                        >
                            i come up with a silly problem and make silly
                            solutions for it
                        </a>{" "}
                        and so i just do that, and i really seem to like
                        monochrome and zero effort designs, don't you think?
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        Some of my works for the public along the way
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Building something and knowing that people uses it for
                        something, is a good feeling. So, these below are for
                        you to use to make me feel good.
                    </p>
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
                                Need help, have questions or something isn't
                                right?
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
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">The road ahead</h2>
                    <p className="text-muted-foreground">
                        Whether you're here to check out my latest work or just
                        to say hello, I'm glad you stopped by! 👋🏽 <br />
                        Join me on this journey of learning, growing, and
                        creating. You can find more of what I'm up to on GitHub
                        and LinkedIn.
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
                            email at hey@thinesjs.com
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default App;
