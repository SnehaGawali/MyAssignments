var app=angular.module("studentsApp",[]);
		app.controller("studentsCtrl",function($scope){
			$scope.students=[{
				name:'Ramya',
				subjects:[{name:'corejava',marks:70},
				{name:'Mean',marks:50},
				{name:'React',marks:80}]},

			   {name:'Jeena',
				subjects:[{name:'corejava',marks:65},
				{name:'Mean',marks:70},
				{name:'React',marks:75}]}];



//////////////////////////////////////////////


			/*	$scope.total=function(){
					sum=0;
					for (i =0; i <$scope.students[0].subjects.length; i++) {
						sum=sum+$scope.students[0].subjects[i].marks;
					}
					return sum;
				},
average:function(){
 					return $scope.students[0].total()/$scope.students[0].subjects.length;
				}}
				}
				*/

$scope.total=function(){
					sum=0;
					for(i=0;i<students.length;i++)
					{
						for(j=0;j<dtudent[i].subjects.length;j++)
						{
							um=sum+$scope.students[i].subjects[j].marks;
						}
					}
					return sum;
						}



				


				$scope.average:function(){
					for(i=0;i<students.length;i++)
					{
						return	$scope.students[i].total()/$scope.students[i].subjects.length;
						
					}
					
						}
				


 			$scope.maxi=function()
 			{ 
 			if($scope.students[0].average()>$scope.students[1].average())
 				{
 			 return	$scope.students[0].average();
 			}
 			else
 			{
 			return	$scope.students[1].average();
 			}


 			}
 			
		});

