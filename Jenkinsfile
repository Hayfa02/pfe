pipeline {
    agent any
      stages {
        
  
         
          stage(' Build Docker image') {
              steps {
                dir("Backend/")
                  sh 'docker build . -t hayfa123/frontend:2.0.0'

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
  
