// 나의 풀이

const TOOL_COUNT = 5;
const TOOL_FATIGUE_TABLE = {
  diamond: {
    diamond: 1,
    iron: 1,
    stone: 1,
  },
  iron: {
    diamond: 5,
    iron: 1,
    stone: 1,
  },
  stone: {
    diamond: 25,
    iron: 5,
    stone: 1,
  },
};

const TOOL_LIST = ['diamond', 'iron', 'stone'];

function solution(picks, minerals) {
  var answer = Infinity;

  function DFS(fatigue, picks, minerals) {
    if (minerals.length === 0 || picks.every((pick) => pick === 0)) {
      answer = Math.min(answer, fatigue);
      return;
    }

    for (let i = 0; i < TOOL_LIST.length; i++) {
      const tool = TOOL_LIST[i];
      if (picks[i] === 0) continue;
      const totalFatigue =
        fatigue + getFatigue(tool, minerals.slice(0, TOOL_COUNT));
      const remainedPicks = picks.map((pickCount, index) => {
        const pick = TOOL_LIST[index];
        // console.log(pickCount, pick, tool, tool === pick)
        if (tool === pick) return pickCount - 1;
        else return pickCount;
      });
      const remainedMinerals = minerals.slice(TOOL_COUNT);
      // console.log(totalFatigue, remainedPicks, remainedMinerals)
      DFS(totalFatigue, remainedPicks, remainedMinerals);
    }
  }

  DFS(0, picks, minerals);

  return answer;
}

function getFatigue(tool, minerals) {
  let fatigue = 0;

  for (const mineral of minerals) {
    fatigue += TOOL_FATIGUE_TABLE[tool][mineral];
  }

  return fatigue;
}
