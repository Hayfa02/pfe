pipeline {
    agent any
      stages {
        
  
         
          stage('Docker Build') {
              steps {
               sh ' docker build -t contangular .'

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
  
