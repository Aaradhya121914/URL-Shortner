import jwt from "jsonwebtoken";
const secretKey = "FUZVwyyOgk%i%g";

function setUser(user) {
    const payload = {
        email: user.email,
        id: user._id,
    }
    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
}

function getUser(token) {
    try {
        if (!token) {
            return null;
        }
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        return null;
    }
}

export { setUser, getUser };