export default ({
    manager: {
        name: 'My Manager',
        country: 'Serbia',
    },
    settings: {
        language: 'English',
        email: 'my@mail.com',
    },
    club: {
        name: 'My Club',
        emblem: 'emblem-1',
        cash: 10000,
        coins: 300,
        slots: 1000,
        cards: 18,
        trainingSlots: 1,
        inTraining: 0,
        trophies: 0,
        matchesPlayed: 0,
        matchesWon: 0,
        matchesDrawn: 0,
        matchesLost: 0,
        goalsScored: 0,
        goalsConceded: 0,
        division: 12,
    },
    notifications: false,
    team: {
        strength: 65,
        chemistry: 50
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