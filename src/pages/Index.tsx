import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Choice = "pedra" | "papel" | "tesoura";
type Result = "win" | "lose" | "draw" | null;

const choices: { value: Choice; emoji: string; label: string }[] = [
  { value: "pedra", emoji: "👊", label: "Pedra" },
  { value: "papel", emoji: "✋", label: "Papel" },
  { value: "tesoura", emoji: "✌️", label: "Tesoura" },
];

const Index = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState<Result>(null);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getComputerChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex].value;
  };

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "draw";
    
    if (
      (player === "pedra" && computer === "tesoura") ||
      (player === "papel" && computer === "pedra") ||
      (player === "tesoura" && computer === "papel")
    ) {
      return "win";
    }
    
    return "lose";
  };

  const playGame = (playerSelection: Choice) => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setPlayerChoice(playerSelection);
    
    const computerSelection = getComputerChoice();
    setComputerChoice(computerSelection);
    
    setTimeout(() => {
      const gameResult = determineWinner(playerSelection, computerSelection);
      setResult(gameResult);
      
      if (gameResult === "win") {
        setPlayerScore((prev) => prev + 1);
      } else if (gameResult === "lose") {
        setComputerScore((prev) => prev + 1);
      }
      
      setIsPlaying(false);
    }, 600);
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResult(null);
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  const getResultMessage = () => {
    if (!result) return "Escolha sua jogada!";
    if (result === "draw") return "Empate! 🤝";
    if (result === "win") return "Você ganhou! 🎉";
    return "Você perdeu! 😢";
  };

  const getResultColor = () => {
    if (!result) return "text-muted-foreground";
    if (result === "draw") return "text-primary";
    if (result === "win") return "text-success";
    return "text-accent";
  };

  const getChoiceColor = (choice: Choice) => {
    if (choice === "pedra") return "rock";
    if (choice === "papel") return "paper";
    return "scissors";
  };

  return (
    <div className="min-h-screen bg-gradient-game flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="bg-gradient-card backdrop-blur-lg border-border/50 shadow-2xl p-8 animate-slide-in">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            Jokenpô
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Pedra, Papel ou Tesoura
          </p>

          {/* Choices Display */}
          <div className="flex justify-center items-center gap-8 mb-8 min-h-[120px]">
            {/* Player Choice */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Você</span>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl transition-all duration-300 ${
                playerChoice 
                  ? `bg-${getChoiceColor(playerChoice)} shadow-lg shadow-${getChoiceColor(playerChoice)}/50 scale-110` 
                  : "bg-muted/20"
              }`}>
                {playerChoice ? choices.find(c => c.value === playerChoice)?.emoji : "❓"}
              </div>
            </div>

            {/* VS */}
            <div className="text-3xl font-bold text-muted-foreground animate-pulse-glow">
              VS
            </div>

            {/* Computer Choice */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Computador</span>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl transition-all duration-300 ${
                computerChoice 
                  ? `bg-${getChoiceColor(computerChoice)} shadow-lg shadow-${getChoiceColor(computerChoice)}/50 scale-110` 
                  : "bg-muted/20"
              }`}>
                {computerChoice ? choices.find(c => c.value === computerChoice)?.emoji : "❓"}
              </div>
            </div>
          </div>

          {/* Result Message */}
          <div className={`text-center mb-8 ${getResultColor()}`}>
            <p className="text-2xl font-bold animate-slide-in">
              {getResultMessage()}
            </p>
          </div>

          {/* Choice Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {choices.map(({ value, emoji, label }) => (
              <Button
                key={value}
                onClick={() => playGame(value)}
                disabled={isPlaying}
                className={`h-28 text-5xl flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 ${
                  value === "pedra" 
                    ? "bg-rock hover:bg-rock/90 shadow-rock/50" 
                    : value === "papel"
                    ? "bg-paper hover:bg-paper/90 shadow-paper/50"
                    : "bg-scissors hover:bg-scissors/90 shadow-scissors/50"
                }`}
              >
                <span>{emoji}</span>
                <span className="text-sm font-medium">{label}</span>
              </Button>
            ))}
          </div>

          {/* Scores */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/20 rounded-xl p-4 text-center backdrop-blur-sm border border-border/30">
              <p className="text-sm text-muted-foreground mb-1">Sua pontuação</p>
              <p className="text-4xl font-bold text-primary">{playerScore}</p>
            </div>
            <div className="bg-muted/20 rounded-xl p-4 text-center backdrop-blur-sm border border-border/30">
              <p className="text-sm text-muted-foreground mb-1">Computador</p>
              <p className="text-4xl font-bold text-secondary">{computerScore}</p>
            </div>
          </div>

          {/* Reset Button */}
          <Button
            onClick={resetGame}
            variant="outline"
            className="w-full bg-success/10 hover:bg-success/20 border-success/30 text-success hover:text-success transition-all duration-300"
          >
            Zerar Pontuação
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Index;
