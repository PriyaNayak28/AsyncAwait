// using promises

function getButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got butter.');
            resolve('Butter');
        }, 2000);
    });
}

function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Husband got cold drinks.');
            resolve('Cold Drink');
        }, 1000);
    });
}

getButter()
    .then((butter) => {
        return getColdDrinks();
    })
    .then((coldDrinks) => {
        console.log(`Husband got ${coldDrinks}`);
    })
    .catch((error) => {
        console.error(error);
    });

// Using Async/Await

async function getButterAndColdDrinks() {
    try {
        const butter = await getButter();
        const coldDrinks = await getColdDrinks();
        console.log(`Husband got ${coldDrinks}`);
    } catch (error) {
        console.error(error);
    }
}

getButterAndColdDrinks();

const posts = [];
let lastUserActivityTime = null;
// creating post

function CreatingPost(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            console.log(`${title} created`);
            resolve(post);
        }, 3000);
    })
}

// deleting post

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dltPost = posts.pop();
            resolve(dltPost);
        }, 2000);
    });
}

// UserLastActivityTime

function updatedUserLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let lastUserActivityTime = new Date();
            console.log('User activity time updated:', lastUserActivityTime);
            resolve();
        }, 1000);
    })
}

// Using Async/Await
async function managePosts() {
    try {
        const post1 = await CreatingPost('Post One');
        await updatedUserLastActivityTime(post1);

        const post2 = await CreatingPost('Post Two');
        await updatedUserLastActivityTime(post2);

        console.log('All Posts:', posts);
        console.log('Last User Activity Time:', lastUserActivityTime);

        const deletedPost = await deletePost();
        console.log('Remaining Posts:', deletedPost);
    } catch (error) {
        console.error(error);
    }
}

managePosts();








