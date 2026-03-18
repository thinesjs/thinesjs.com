import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "./Admin.css";

const MAX_TREES = 10;

const STARS = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 55}%`,
    delay: `${Math.random() * 3}s`,
}));

interface Tree {
    id: number;
    x: number;
    y: number;
}

export default function Admin() {
    const navigate = useNavigate();
    const [pets, setPets] = useState(0);
    const [trees, setTrees] = useState<Tree[]>([]);
    const [isPetted, setIsPetted] = useState(false);

    const handlePetHorse = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setPets((p) => p + 1);
        setIsPetted(true);
        setTimeout(() => setIsPetted(false), 400);
    }, []);

    const handlePlantTree = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (trees.length >= MAX_TREES) {
                toast("The farm is full!");
                return;
            }
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            setTrees((prev) => [...prev, { id: Date.now(), x: xPercent, y: yPercent }]);
        },
        [trees.length]
    );

    return (
        <div className="min-h-screen bg-background text-foreground p-8 md:p-16">
            <div className="mx-auto max-w-3xl space-y-10">
                <button
                    onClick={() => navigate("/")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    &larr; back
                </button>

                <div className="flex flex-col items-center space-y-6">
                    <h1 className="text-lg text-muted-foreground">
                        thines' secret farm
                    </h1>

                    <div className="farm-scene">
                        {STARS.map((star) => (
                            <div
                                key={star.id}
                                className="star"
                                style={{
                                    left: star.left,
                                    top: star.top,
                                    animationDelay: star.delay,
                                }}
                            />
                        ))}

                        <div
                            className={`horse-emoji${isPetted ? " petted" : ""}`}
                            onClick={handlePetHorse}
                            role="button"
                            tabIndex={0}
                            aria-label="Pet the horse"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handlePetHorse(e as unknown as React.MouseEvent);
                                }
                            }}
                        >
                            🐎
                        </div>

                        <div className="farm-ground" onClick={handlePlantTree}>
                            {trees.map((tree) => (
                                <span
                                    key={tree.id}
                                    className="tree-emoji"
                                    style={{ left: `${tree.x}%`, top: `${tree.y}%` }}
                                >
                                    🌳
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <span>pets: {pets}</span>
                        <span>trees: {trees.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
