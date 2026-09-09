export class User {
    constructor({ uid, email, password, displayName, 
        photoURL, emailVerified, phoneNumber, 
        disable, createdAt, updatedAt }) {
        this.uid = uid
        this.email = email
        this.displayName = displayName || ''
        this.photoURL = photoURL || ''
        this.password = password
        this.emailVerified = emailVerified || false
        this.phoneNumber = phoneNumber || ''
        this.disable = disable || false
        this.createdAt = createdAt || new Date()
        this.updatedAt = updatedAt || new Date()
    }
}