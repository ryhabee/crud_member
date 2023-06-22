const memberModel = require('../models/member');
const readline = require('readline');


exports.addMember = async (memberData) => {
  try {
    const newMember = new memberModel(memberData);
    const savedMember = await newMember.save();
    console.log('Member created successfully:', savedMember);
    return savedMember;
  } catch (error) {
    console.error('Error creating member:', error);
    throw error;
  }
};

const newMemberData = {
  id: 1,
  firstName: 'rihab',
  lastName: 'belarbi',
  email: 'rihab@example.com',
  password: 'password123',
  joinDate: new Date(),
  birthday: new Date('2002-01-22')
};

exports.addMember(newMemberData)
  .then((savedMember) => {
    console.log('New member created:', savedMember);
  })
  .catch((error) => {
    console.error('Error creating member:', error);
  });


/* input from the console */
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Function to collect member data from the user
// const collectMemberData = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Enter member data:\n', (answer) => {
//       const memberData = JSON.parse(answer);
//       resolve(memberData);
//     });
//   });
// };

// exports.addMember = async (memberData) => {
//   try {
//     const newMember = new memberModel(memberData);
//     const savedMember = await newMember.save();
//     console.log('Member created successfully:', savedMember);
//     return savedMember;
//   } catch (error) {
//     console.error('Error creating member:', error);
//     throw error;
//   }
// };

// // Function to start the process of collecting member data and adding a new member
// const start = async () => {
//   try {
//     const newMemberData = await collectMemberData();
//     await exports.addMember(newMemberData);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     rl.close();
//   }
// };

// start();
