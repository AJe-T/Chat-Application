export const sendMessage = async (req, res) => {
  try{
    const {message} = req.body;
    const {id} = req.params;
    const senderId = req.user._id;
    
  }
  catch(error){
    console.log("error in send Message Controller :", error.message)
  }
};
