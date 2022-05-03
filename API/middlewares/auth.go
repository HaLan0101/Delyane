package middlewares

import (
	"delyaneAPI/models"
	"delyaneAPI/repository"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// BasicAuth log user on API with BasicAuth with user stored on the db
func BasicAuth(c *gin.Context) {
	// Get the Basic Authentication credentials
	username, password, hasAuth := c.Request.BasicAuth()
	if hasAuth {
		user := repository.GetUserByUsername(username)
		if len(user) == 1 {
			if username == user[0].Username {
				if bcrypt.CompareHashAndPassword([]byte(user[0].Password), []byte(password)) == nil {
					fmt.Println("User " + username + " logged in from BasicAuth")
					return
				}
			}
		}
	}
	c.Abort()
	c.Writer.Header().Set("WWW-Authenticate", "Basic realm=Restricted")
	c.String(http.StatusUnauthorized, "")
}

// JWT validates token and authorizes users
func JWT(c *gin.Context) {
	clientToken := c.Request.Header.Get("Authorization")
	if clientToken == "" {
		c.JSON(403, "No Authorization header provided")
		c.Abort()
		return
	}

	extractedToken := strings.Split(clientToken, "Bearer ")

	if len(extractedToken) == 2 {
		clientToken = strings.TrimSpace(extractedToken[1])
	} else {
		c.JSON(400, "Incorrect Format of Authorization Token")
		c.Abort()
		return
	}

	jwtWrapper := models.JwtWrapper{
		SecretKey: "verysecretkey",
		Issuer:    "AuthService",
	}

	claims, err := jwtWrapper.ValidateToken(clientToken)
	if err != nil {
		c.JSON(401, err.Error())
		c.Abort()
		return
	}

	c.Set("email", claims.Email)

	c.Next()

}
