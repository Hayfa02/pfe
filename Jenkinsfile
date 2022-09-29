pipeline {
    agent any
      stages {
        
  
         
          stage(' Build ') {
              steps {
                dir("Backend/")
                  sh 'npm i'

      }
    }
      
         
          stage(' Build Docker image') {
              steps {
                dir("Backend/")
                  sh 'docker build . -t hayfa123/backend:2.0.0'

      }
    }
          
          stage(' docker  image') {
             steps {
               sh 'docker images'

      }
    }
  
                 stage(' docker  cont') {
             steps {
               sh 'docker ps'

      }
    }
          
    
      }
}
  
