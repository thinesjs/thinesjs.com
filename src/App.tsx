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
            <div className="mx-auto max-w-3xl space-y-10">
                <header className="flex justify-between items-center">
                    <h1 className="text-2xl font-medium">thines jai shankar</h1>
                    <ModeToggle />
                </header>

                <section>
                    <p className="text-muted-foreground leading-relaxed">
                        hi, im thines, on a normal day, i prompt ai to write
                        code and i commit them on behalf of me. (tehc 101)
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        well if you are interested...
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        check these out if it works, if it doesn't, blame claude
                        and maybe let me know?
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
                                                              "_blank",
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
                        if you'd like to reach out...
                    </h2>
                    <div className="space-y-6">
                        <p className="text-muted-foreground">
                            need help, have questions or something isn't right?
                        </p>
                        <Button
                            variant="link"
                            className="px-0 text-blue-500 hover:text-blue-400"
                            onClick={() =>
                                handleOpenDialog("Contact Information")
                            }
                        >
                            <MessageSquare className="mr-2 h-4 w-4" /> Contact
                            Me
                        </Button>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() =>
                                window.open(
                                    "https://github.com/thinesjs",
                                    "_blank",
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
                                    "_blank",
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
