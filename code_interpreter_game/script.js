
// Story data structure
const storyNodes = {
    "start": {
        "text": "You wake up to find your module missing. What will you do?",
        "choices": [
            {"text": "Search the area", "nextNode": "search"},
            {"text": "Wait for rescue", "nextNode": "wait"}
        ]
    },
    "search": {
        "text": "You start searching and find some tracks. What do you do?",
        "choices": [
            {"text": "Follow the tracks", "nextNode": "follow"},
            {"text": "Ignore the tracks", "nextNode": "ignore"}
        ]
    },
    "wait": {
        "text": "You decide to wait. Hours pass, and you realize you're running out of oxygen.",
        "choices": [
            {"text": "Panic", "nextNode": "panic"},
            {"text": "Conserve oxygen", "nextNode": "conserve"}
        ]
    },
    "follow": {
        "text": "The tracks lead you to a mysterious cave. Enter the cave or continue searching?",
        "choices": [
            {"text": "Enter the cave", "nextNode": "cave"},
            {"text": "Continue searching", "nextNode": "continueSearch"}
        ]
    },
    "ignore": {
        "text": "You wander aimlessly and stumble upon an old Martian relic. Investigate?",
        "choices": [
            {"text": "Investigate the relic", "nextNode": "relic"},
            {"text": "Ignore and move on", "nextNode": "moveOn"}
        ]
    },
    "panic": {
        "text": "You panic, and your oxygen runs out faster. It's the end.",
        "choices": []
    },
    "conserve": {
        "text": "You conserve your oxygen, and a rescue team finds you just in time!",
        "choices": []
    },
    "cave": {
        "text": "Inside the cave, you find water and signs of past life. You've made a groundbreaking discovery!",
        "choices": []
    },
    "continueSearch": {
        "text": "You continue searching and finally find your module! You're saved!",
        "choices": []
    },
    "relic": {
        "text": "The relic is a map pointing to a hidden underground city! A new adventure awaits.",
        "choices": []
    },
    "moveOn": {
        "text": "You decide to move on, but the Martian environment proves too challenging. You're lost.",
        "choices": []
    }
};

let currentNode = "start";
const storyTextElement = document.getElementById("story-text");
const choicesElement = document.querySelector('.choices');

function renderNode(nodeId) {
    const node = storyNodes[nodeId];
    storyTextElement.textContent = node.text;
    choicesElement.innerHTML = '';

    for (let choice of node.choices) {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            currentNode = choice.nextNode;
            renderNode(currentNode);
        };
        choicesElement.appendChild(button);
    }
}

// Start the game
renderNode(currentNode);
