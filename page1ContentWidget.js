Clazz.page1ContentWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
        initialize : function(config){
            this.templateUrl = "page1Content.html";
        },
        bindUI: function() {
            var y = function() {
                document.Navigate("page2")
            };
            $("#forwardButton").click(y);
       },
        jq1: function()
        {
            $(document).ready(function(){
                $("#serverConnection").click(function(e){
                    e.placeData();
                    $.ajax({
                        url: "http://localhost:3000/details",
                        type: "GET",
                //data: postJson,
                        success: function(obj) {
                            console.log(obj);
                            $("#result").html(obj);
                            
                        },
                    });
                });
            });
        }
    }
);