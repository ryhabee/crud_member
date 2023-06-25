const memberModel = require('../models/member');

// exports.addMember = async (memberData) => {
//   try {
//     const newMember = new memberModel(memberData);
//     const savedMember = await newMember.save();
//     console.log('Member created successfully:', savedMember);
//     return savedMember;
//   } 
//   catch (error)
//    {
//     console.error('Error creating member:', error);
//     throw error;
//   }
// };
exports.getAllMembers = async () => {
  return await memberModel.find();
};

exports.addMember =async(member)=>{
  return await memberModel.create(member) ;
}
exports.getMemberById = async (id) => {
  return await memberModel.findById(id);
};

exports.getMemberByEmail = async (email) => {
  try {
    const member = await memberModel.findOne({ email: email }); 
    return member; 
  } catch (err) {
    throw new Error('Failed to fetch member by email.'); // Throw an error if there's an issue with the database query
  }
};


























// const newMemberData = {
//   id: 1,
//   firstName: 'rihab',
//   lastName: 'belarbi',
//   email: 'rihab@example.com',
//   password: 'password123',
//   joinDate: new Date(),
//   birthday: new Date('2002-01-22')
// };

// exports.addMember(newMemberData)
//   .then((savedMember) => {
//     console.log('New member created:', savedMember);
//   })
//   .catch((error) => {
//     console.error('Error creating member:', error);
//   });

