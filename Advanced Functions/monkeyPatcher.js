var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0

    
};

function solve() {
    const commands = {
        upvote(post) {
            post.upvotes++;
        },

        downvote(post) {
            post.downvotes++;
        },
    
        score(post) {
            let {upvotes, downvotes} = post;
            let total = upvotes + downvotes;
            let balance = upvotes - downvotes;

            let obfuscated = 0;
            if (total > 50) {
                obfuscated = Math.ceil(0.25 * Math.max(post.upvotes, post.downvotes));
                upvotes += obfuscated;
                downvotes += obfuscated;
            };

            let rating = '';
            if (total < 10) {
                rating = 'new';
            } else if (upvotes / total > 0.66) {
                rating = 'hot';
            } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = 'controversial';
            }else if (balance < 0) {
                rating = 'unpopular';
            };
            return [upvotes, downvotes, balance, rating];
        }
    };

    return (command) => solve(commands[command](input));
};

let solution = solve();
solution.call(forumPost, 'upvote');
solution.call(forumPost, 'score');
// let score = solution.call(forumPost, 'score'); // [127, 127, 0, 'controversial']
// solution.call(forumPost, 'downvote');        // (executed 50 times)
// score = solution.call(forumPost, 'score');     
