const musNum = 1
var name = ""
if(musNum===0)
{
    name = "Not a group"
}
else if(musNum===1)
{
    name = "solo"
}
else if(musNum===2)
{
    name = "duo"
}
console.log(name)
const isGoing = true;
const color = isGoing ? "green" : "red";
console.log(color);

let factor = 1
for (x=1;x<=3;x++)
{
    factor = factor*x
}
console.log(factor)

function reverseName(Name)
{
    let reversed = "";  
    for(x=Name.length-1; x>=0;x--)
    {
        reversed = reversed + Name[x]
    }
    return reversed
}

console.log(reverseName("AcilCain"))

function laugh(num)
{
    let giggle = ""
    for (x=0;x<num;x++)
    {
        giggle = giggle+ "haha"
    }
    return giggle
}

console.log(laugh(3))

function makeLine(num)
{
    let star = "";
    for (i=0;i<num;i++)
    {
        star = star + "* ";
    }
    return star + "\n";
    
}

function makeTriangle(layerNum)
{
    let layer ="";
    for (i=0;i<=layerNum;i++) {
        layer = layer + makeLine(i);
    }
    return layer;
}

const castName = ["Mal","Zoe","Wash","Inara","Jayne","Kaylee"];
for (i=0;i<castName.length;i++)
{
    console.log(castName[i]);
}

const prices = [1.23,48.11,90.11,8.50,9.99,1.00,1.10,67.00];
for (i=0;i<prices.length;i++)
{
    switch (i)
    {
        case 0: case 2: case 6:
            prices[i] = prices[i]*2;
            break;
        default:
            prices[i]=prices[i];
            break;
    }
}
console.log(prices)

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,'Yellow','Green');
rainbow.push('Purple');
console.log(rainbow);

const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];

const teamComp = [team1,team2,team3,team4]
for (i=0;i<teamComp.length;i++)
{
    if (teamComp[i].length<7)
    {
        console.log("false")
    }
    else
    {
        console.log("true")
    }
}

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
const tipBills = bills.map(function(element)
{
    element = element*1.5;
    element = element.toFixed(2)
    return element
});
console.log(tipBills)


const umbrella = {
    isOpen: false,
    open : function()
    {
        if (umbrella.isOpen === true)
        {
            console.log("Umbrella is already opened");
        }
        else
        {
            umbrella.isOpen = true;
            console.log("The umbrella has been opened")
        }
    },
    close: function(){
        if (umbrella.isOpen === false)
        {
            console.log("The umbrella is already closed.")
        }
        else
        {
            umbrella.isOpen = false;
            console.log("The Umbrella has been closed")
        }
    },
}

const facebookProfile = {
    name: "Abel",
    friends: 3,
    messages: ["The One Piece", "The One Piece Is Real","Can We Get Much Higher, So High"],
    addMessage: function pushMessage(aMessage){
        facebookProfile.messages.push(aMessage);
    },
    removeMessage: function deleteMesssage(index)
    {
        facebookProfile.messages.splice(index,1);
    },
    newFriend: function addFriend(){
        facebookProfile.friends += 1;
    },
    byeFriend: function removeFriend(){
        facebookProfile.friends -= 1;
    },
}

const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
    console.log(donut.type+" donuts costs $"+donut.cost+" each")
})