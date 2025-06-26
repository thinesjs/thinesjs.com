import {
    MessageSquare,
    Flag,
    BadgeCheck,
    Github,
    Linkedin,
    ArrowRight,
    ArrowUpRightIcon,
} from "lucide-react";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

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
                <header className="space-y-1">
                    <h1 className="text-2xl font-medium">thines jai shankar</h1>
                    <p className="text-muted-foreground">
                        just imagine there is some inspirational quote here 🚀
                    </p>
                </header>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">The journey so far</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        It all started with a curiousity. My early days were
                        deploying a website meant dragging files into an FTP
                        window and waiting — hoping everything would upload
                        without breaking, sometimes waiting for hours.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">In the present</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Over time, what started as a hobby turned into something
                        i'd do everyday and now it's a career! Every projects
                        i create, although most of it don't make it out into a
                        complete project but that's the fun of it, its a step
                        towards mastery!
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        The excitement of building something from scratch still
                        drives me today.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-xl font-medium">
                        Some of my works along the way
                    </h2>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="font-medium">thinesjs.com</h3>
                            <p className="text-muted-foreground">
                                A portfolio website is probably the first for
                                most software engineers, although I cant relate
                                but this is also one of my works!
                            </p>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                disabled={true}
                                onClick={() =>
                                    window.open(
                                        "https://thinesjs.com",
                                        "_blank"
                                    )
                                }
                            >
                                <ArrowRight className="mr-2 h-4 w-4" /> You are
                                here
                            </Button>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-medium">
                                myPlate - Malaysia Car Plates
                            </h3>
                            <p className="text-muted-foreground">
                                An application to keep track of latest vehicle
                                registration numbers for Malaysians. Available for
                                iOS and Android through the App Store and Google
                                Play Store.
                            </p>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                onClick={() =>
                                    window.open(
                                        "https://apps.apple.com/us/app/myplate-malaysia-car-plates/id6741453266",
                                        "_blank"
                                    )
                                }
                            >
                                <ArrowUpRightIcon className="mr-2 h-4 w-4" />{" "}
                                Get myPlate for iOS
                            </Button>
                            <Button
                                variant="link"
                                className="px-0 text-blue-500 hover:text-blue-400"
                                onClick={() =>
                                    window.open(
                                        "https://play.google.com/store/apps/details?id=com.thinesjs.myplate",
                                        "_blank"
                                    )
                                }
                            >
                                <ArrowUpRightIcon className="mr-2 h-4 w-4" />{" "}
                                Get myPlate for Android
                            </Button>
                        </div>
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
                            email at thinesweb @ gmail dot com.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default App;
