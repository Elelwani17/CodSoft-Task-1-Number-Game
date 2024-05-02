
        let currentRound = 0;
        let totalRounds = 0;
        let secretNumber = 0;
        let attempts = 0;
        let maxAttempts = 5; 
        let isHardMode = true;

        function startGame() {
            totalRounds = parseInt(document.getElementById('numRounds').value) || 1;
            currentRound = 0;
            nextRound();
            document.getElementById('setup').style.display = 'none';
            document.getElementById('game').style.display = '';
        }

        function nextRound() {
            currentRound++;
            if (currentRound > totalRounds) {
                alert('Game Over! Thanks for playing.');
                document.getElementById('game').style.display = 'none';
                document.getElementById('setup').style.display = '';
                return;
            }
            secretNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById('feedback').textContent = `Round ${currentRound} of ${totalRounds}.`;
            document.getElementById('nextRound').style.display = 'none';
            document.getElementById('guessInput').value = '';
        }

        function submitGuess() {
            const guess = parseInt(document.getElementById('guessInput').value);
            if (isNaN(guess)) {
                alert('Please enter a valid number.');
                return;
            }
            attempts++;
            if (guess === secretNumber) {
                document.getElementById('feedback').textContent = `Correct! It took you ${attempts} attempts.`;
                document.getElementById('nextRound').style.display = '';
            } else if (guess < secretNumber) {
                document.getElementById('feedback').textContent = 'Too low!';
            } else {
                document.getElementById('feedback').textContent = 'Too high!';
            }

            if (isHardMode && attempts >= maxAttempts) {
                document.getElementById('feedback').textContent += ` Game over! The number was ${secretNumber}.`;
                document.getElementById('nextRound').style.display = '';
            }
        }
