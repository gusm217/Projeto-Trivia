import md5 from 'crypto-js/md5';

export function handleStyleAnswers() {
  const styleAnswers = document.getElementsByName('answer');
  styleAnswers.forEach((answerBtn) => {
    if (answerBtn.getAttribute('data-testid') === 'correct-answer') {
      answerBtn.style = 'border: 3px solid rgb(6, 240, 15)';
    } else {
      answerBtn.style = 'border: 3px solid rgb(255, 0, 0)';
    }
  });
}

export function setRankToStorage(name, email, score) {
  const picture = `https://www.gravatar.com/avatar/${md5(email).toString()}`;

  if (JSON.parse(localStorage.getItem('ranking'))) {
    const currentRank = JSON.parse(localStorage.getItem('ranking'));
    const newRank = [...currentRank, { name, score, picture }];
    localStorage.setItem('ranking', JSON.stringify(newRank));
  } else {
    const newRank = [{ name, score, picture }];
    localStorage.setItem('ranking', JSON.stringify(newRank));
  }
}
