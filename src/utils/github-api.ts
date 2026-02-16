/**
 * GitHub-style commit activity simulation.
 * Generates realistic-looking activity data for the CommitGraph component.
 */

export interface CommitDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

function seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

export function generateCommitData(weeks: number = 20): CommitDay[][] {
    const rand = seededRandom(42);
    const data: CommitDay[][] = [];
    const now = new Date();

    for (let w = weeks - 1; w >= 0; w--) {
        const week: CommitDay[] = [];
        for (let d = 0; d < 7; d++) {
            const date = new Date(now);
            date.setDate(date.getDate() - (w * 7 + (6 - d)));

            const isWeekday = d > 0 && d < 6;
            const baseChance = isWeekday ? 0.75 : 0.3;
            const hasCommit = rand() < baseChance;

            let count = 0;
            let level: 0 | 1 | 2 | 3 | 4 = 0;

            if (hasCommit) {
                const r = rand();
                if (r < 0.4) { count = Math.ceil(rand() * 3); level = 1; }
                else if (r < 0.7) { count = 3 + Math.ceil(rand() * 4); level = 2; }
                else if (r < 0.9) { count = 7 + Math.ceil(rand() * 5); level = 3; }
                else { count = 12 + Math.ceil(rand() * 8); level = 4; }
            }

            week.push({
                date: date.toISOString().split('T')[0],
                count,
                level,
            });
        }
        data.push(week);
    }

    return data;
}
