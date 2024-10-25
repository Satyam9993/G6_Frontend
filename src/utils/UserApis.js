const updateUserInfo = async (BACKEND_URL, token, body) => {
    try {
      const response = await fetch(`${BACKEND_URL}/updateuserinfo`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: body
      });

      const userData = await response.json();
      
      if (userData.success) {
        return true;
      } else {
        toast.error(userData.message);
      }
    } catch (error) {
      toast.error("Failed to fetch user info");
    }
  };