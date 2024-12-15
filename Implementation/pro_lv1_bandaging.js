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
