export default ({
    cash: 10000,
    coins: 300,
    clubName: 'My Club',
    emblem: 'emblem-1',
    notifications: false,
    teamChemistry: 50,
    slots: 1000,
    division: 12,
    cards: 18,
    inTraining: 0,
    trainingSlots: 1,
    team: {
        strength: 65
    },
    achievements: [
        {
            title: 'Slot Machine',
            text: 'Upgrade your card slots to 35.',
            reward: 20,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false
        },
        {
            title: 'The Wallet',
            text: 'Purchase Manager Coins',
            reward: 150,
            completed: false
        }
    ]
});