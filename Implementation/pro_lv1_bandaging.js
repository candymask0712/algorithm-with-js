// 나의 풀이
function solution(bandage, health, attacks) {
  var answer = 0;
  let prevAttackTime = 0;
  const maxHealth = health;
  const [bonusTime, healPerSecond, bonusHeal] = bandage;

  attacks.forEach((attack) => {
    if (health === -1) return;
    const [attackTime, damage] = attack;
    let timeDiff = attackTime - prevAttackTime - 1;

    if (health !== maxHealth && timeDiff > 0) {
      if (timeDiff <= 0) timeDiff = 0;

      health += timeDiff * healPerSecond;
      if (timeDiff >= bonusTime)
        health += Math.floor(timeDiff / bonusTime) * bonusHeal;
      if (health > maxHealth) health = maxHealth;
    }

    health -= damage;
    prevAttackTime = attackTime;
    if (health <= 0) health = -1;
  });

  return health;
}

18;
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
