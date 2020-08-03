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
        // SLOT MACHINE
        {
            title: 'Slot Machine',
            text: 'Upgrade your card slots to 10.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Slot Machine',
            text: 'Upgrade your card slots to 25.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Slot Machine',
            text: 'Upgrade your card slots to 50.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Slot Machine',
            text: 'Upgrade your card slots to 100.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // THE WALLET
        {
            title: 'The Wallet',
            text: 'Purchase Manager Coins.',
            reward: 150,
            completed: false,
            hidden: false
        },
        // REPLACEMENT
        {
            title: 'Replacement',
            text: 'Use another manager from your card inventory to manage your club.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // DIVISION RANKER
        {
            title: 'Division ranker',
            text: 'Rank 1st in a weekly Division competition.',
            reward: 100,
            completed: false,
            hidden: false
        },
        // DIVISION KING
        {
            title: 'Division King',
            text: 'Promote to Division 11 in Divisions.',
            reward: 180,
            completed: false,
            hidden: false
        },
        {
            title: 'Division King',
            text: 'Promote to Division 10 in Divisions.',
            reward: 210,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 9 in Divisions.',
            reward: 240,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 8 in Divisions.',
            reward: 270,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 7 in Divisions.',
            reward: 300,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 6 in Divisions.',
            reward: 330,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 5 in Divisions.',
            reward: 360,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 4 in Divisions.',
            reward: 390,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 3 in Divisions.',
            reward: 420,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 2 in Divisions.',
            reward: 450,
            completed: false,
            hidden: true
        },
        {
            title: 'Division King',
            text: 'Promote to Division 1 in Divisions.',
            reward: 150,
            completed: false,
            hidden: true
        },
        // DIVISION PLAYER
        {
            title: 'Division Player',
            text: 'Play 10 matches in Divisions.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Division Player',
            text: 'Play 25 matches in Divisions.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 50 matches in Divisions.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 100 matches in Divisions.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 250 matches in Divisions.',
            reward: 40,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 500 matches in Divisions.',
            reward: 40,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 1000 matches in Divisions.',
            reward: 60,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 2500 matches in Divisions.',
            reward: 80,
            progressBar: {
                goal: 2500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Division Player',
            text: 'Play 5000 matches in Divisions.',
            reward: 100,
            progressBar: {
                goal: 5000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // CARD COLLECTOR
        {
            title: 'Card Collector',
            text: 'Obtain 10 cards through card packs.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Card Collector',
            text: 'Obtain 25 cards through card packs.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 50 cards through card packs.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 100 cards through card packs.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 250 cards through card packs.',
            reward: 40,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 500 cards through card packs.',
            reward: 40,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 1000 cards through card packs.',
            reward: 60,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 2500 cards through card packs.',
            reward: 80,
            progressBar: {
                goal: 2500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 5000 cards through card packs.',
            reward: 100,
            progressBar: {
                goal: 5000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Card Collector',
            text: 'Obtain 10000 cards through card packs.',
            reward: 100,
            progressBar: {
                goal: 10000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // SCOUTING MADNESS
        {
            title: 'Scouting Madness',
            text: 'Buy a player that was discovered by your scout.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // IMPROVE YOUR LOOKS
        {
            title: 'Improve your looks',
            text: 'Change your club emblem.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // TROPHY WINNER
        {
            title: 'Trophy Winner',
            text: 'Obtain 100 trophies in total with your club.',
            reward: 100,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Trophy Winner',
            text: 'Obtain 200 trophies in total with your club.',
            reward: 200,
            progressBar: {
                goal: 200,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Trophy Winner',
            text: 'Obtain 300 trophies in total with your club.',
            reward: 300,
            progressBar: {
                goal: 300,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Trophy Winner',
            text: 'Obtain 400 trophies in total with your club.',
            reward: 400,
            progressBar: {
                goal: 400,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Trophy Winner',
            text: 'Obtain 500 trophies in total with your club.',
            reward: 500,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // EXHIBITION LEGEND
        {
            title: 'Exhibition Legend',
            text: 'Play 10 exhibition matches.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 25 exhibition matches.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 50 exhibition matches.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 100 exhibition matches.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 250 exhibition matches.',
            reward: 40,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 500 exhibition matches.',
            reward: 40,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 1000 exhibition matches.',
            reward: 60,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 2500 exhibition matches.',
            reward: 80,
            progressBar: {
                goal: 2500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 5000 exhibition matches.',
            reward: 100,
            progressBar: {
                goal: 5000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Exhibition Legend',
            text: 'Play 10000 exhibition matches.',
            reward: 100,
            progressBar: {
                goal: 10000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // MAN OF THE MATCHES
        {
            title: 'Man of the matches',
            text: 'Play 10 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Man of the matches',
            text: 'Play 25 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 50 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 100 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 250 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 500 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 1000 matches. All match types count.',
            reward: 60,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 2500 matches. All match types count.',
            reward: 80,
            progressBar: {
                goal: 2500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 5000 matches. All match types count.',
            reward: 100,
            progressBar: {
                goal: 5000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Man of the matches',
            text: 'Play 10000 matches. All match types count.',
            reward: 100,
            progressBar: {
                goal: 10000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // MATCH WARRIOR
        {
            title: 'Match warrior',
            text: 'Win 10 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Match warrior',
            text: 'Win 25 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 50 matches. All match types count.',
            reward: 20,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 100 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 250 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 500 matches. All match types count.',
            reward: 40,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 1000 matches. All match types count.',
            reward: 60,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 2500 matches. All match types count.',
            reward: 80,
            progressBar: {
                goal: 2500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 5000 matches. All match types count.',
            reward: 100,
            progressBar: {
                goal: 5000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Match warrior',
            text: 'Win 10000 matches. All match types count.',
            reward: 100,
            progressBar: {
                goal: 10000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // WINNING STREAK
        {
            title: 'Winning streak',
            text: 'Win 2 matches in a row in Divisions.',
            reward: 100,
            progressBar: {
                goal: 2,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Winning streak',
            text: 'Win 3 matches in a row in Divisions.',
            reward: 150,
            progressBar: {
                goal: 3,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 4 matches in a row in Divisions.',
            reward: 200,
            progressBar: {
                goal: 4,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 5 matches in a row in Divisions.',
            reward: 250,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 6 matches in a row in Divisions.',
            reward: 300,
            progressBar: {
                goal: 6,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 7 matches in a row in Divisions.',
            reward: 350,
            progressBar: {
                goal: 7,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 8 matches in a row in Divisions.',
            reward: 400,
            progressBar: {
                goal: 8,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 9 matches in a row in Divisions.',
            reward: 450,
            progressBar: {
                goal: 9,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Winning streak',
            text: 'Win 10 matches in a row in Divisions.',
            reward: 500,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // FIT
        {
            title: 'Fit',
            text: 'Recover the stamina of a player using a Stamina Recovery card.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // HEALTHY
        {
            title: 'Healthy',
            text: 'Treat an injured player using an Injury Treatment card.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // GO TO COURT
        {
            title: 'Go to court',
            text: 'Dissolve the suspension of a player using a Perfect Attorney card.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // TRAINING CAMP EXPERT
        {
            title: 'Training camp expert',
            text: 'Prepare yourself for the next match in the best possible way by going on a training camp.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // ENGAGED TRAINER
        {
            title: 'Engaged trainer',
            text: 'Complete a training session for 5 different players.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 10 different players.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 15 different players.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 20 different players.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 25 different players.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 30 different players.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 35 different players.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 40 different players.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 45 different players.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Complete a training session for 50 different players.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // FOCUSED TRAINER
        {
            title: 'Focused trainer',
            text: 'Train a player till level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Focused trainer',
            text: 'Train a player till level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // PERFECT STADIUM
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect stadium',
            text: 'Upgrade your stadium to level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // PERFECT TRAINING
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect training',
            text: 'Upgrade your training to level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // PERFECT PITCH
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect pitch',
            text: 'Upgrade your pitch to level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // PERFECT GYM
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect gym',
            text: 'Upgrade your gym to level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // PERFECT MANAGER
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 5.',
            reward: 30,
            progressBar: {
                goal: 5,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 10.',
            reward: 60,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 15.',
            reward: 90,
            progressBar: {
                goal: 15,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 20.',
            reward: 120,
            progressBar: {
                goal: 20,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 25.',
            reward: 150,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 30.',
            reward: 180,
            progressBar: {
                goal: 30,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 35.',
            reward: 210,
            progressBar: {
                goal: 35,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 40.',
            reward: 240,
            progressBar: {
                goal: 40,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 45.',
            reward: 270,
            progressBar: {
                goal: 45,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Perfect manager',
            text: 'Upgrade your manager to level 50.',
            reward: 300,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // GOAL-GETTER
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 10 goals in all match types.',
            reward: 10,
            progressBar: {
                goal: 10,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 25 goals in all match types.',
            reward: 25,
            progressBar: {
                goal: 25,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 50 goals in all match types.',
            reward: 50,
            progressBar: {
                goal: 50,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 100 goals in all match types.',
            reward: 100,
            progressBar: {
                goal: 100,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 250 goals in all match types.',
            reward: 250,
            progressBar: {
                goal: 250,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 500 goals in all match types.',
            reward: 500,
            progressBar: {
                goal: 500,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Goal-getter',
            text: 'Make sure one of your players scores 1000 goals in all match types.',
            reward: 1000,
            progressBar: {
                goal: 1000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        // CLEANING SERVICE
        {
            title: 'Cleaning service',
            text: 'Keep a cleen sheet with your team in any match type.',
            reward: 20,
            completed: false,
            hidden: false
        },
        // HAT-TRICK HERO
        {
            title: 'Hat-trick hero',
            text: 'Score a hat-trick with a player.',
            reward: 30,
            completed: false,
            hidden: false
        },
        // SAVINGS
        {
            title: 'Savings',
            text: 'Save your Manager Cash until you have 10000.',
            reward: 30,
            progressBar: {
                goal: 10000,
                current: 0,
            },
            completed: false,
            hidden: false
        },
        {
            title: 'Savings',
            text: 'Save your Manager Cash until you have 25000.',
            reward: 60,
            progressBar: {
                goal: 25000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Savings',
            text: 'Save your Manager Cash until you have 50000.',
            reward: 90,
            progressBar: {
                goal: 50000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
        {
            title: 'Savings',
            text: 'Save your Manager Cash until you have 100000.',
            reward: 120,
            progressBar: {
                goal: 100000,
                current: 0,
            },
            completed: false,
            hidden: true
        },
    ]
});