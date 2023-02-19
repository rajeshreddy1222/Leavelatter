        function heading()
        {
            var col=document.getElementById("hc").value
            localStorage.setItem("headingcolor",col)
            document.getElementById("head").style.color=col
        }
        function heading1()
        {
            var fs=document.getElementById("range").value
            localStorage.setItem("headingfs",fs)
            document.getElementById("head").style.fontSize=fs+"px"
        }
        function Background()
        {
            var col=document.getElementById("bc").value
            localStorage.setItem("Backgroundcolor",col)
            document.getElementById("bh").style.color=col
        }
        
        function Backgroundcenter()
        {
            document.getElementById("bh").style.textAlign="center"
            localStorage.getItem("align",center)
        }
        function Backgroundleft()
        {
            document.getElementById("bh").style.textAlign="left"
        }
        function Backgroundright()
        {
            document.getElementById("bh").style.textAlign="right"
        }
        function Backgroundjustify()
        {
            document.getElementById("bh").style.textAlign="justify"
        }
        function sample()
        {
            var col=document.getElementById("smc").value
            localStorage.setItem("samplecolor",col)
            document.getElementById("smp").style.color=col
        }
        function sample1()
        {
            var fs=document.getElementById("smrange").value
            localStorage.setItem("samplefs",fs)
            document.getElementById("smp").style.fontSize=fs+"px"
        }
        function details()
        {
            var date=document.getElementById("date").value
            var toname=document.getElementById("tn").value
            var toadd=document.getElementById("ta").value
            var fromnm=document.getElementById("fn").value
            var fromadd=document.getElementById("fa").value
            var subge=document.getElementById("sg").value
            var sub=document.getElementById("sub").value
            var reason=document.getElementById("rea").value
            var fd=document.getElementById("fd").value
            var td=document.getElementById("td").value
            var NOD=document.getElementById("nds").value
            localStorage.setItem("date",date)
            localStorage.setItem("toname",toname)
            localStorage.setItem("toadd",toadd)
            localStorage.setItem("fromnm",fromnm)
            localStorage.setItem("fromadd",fromadd)
            localStorage.setItem("subgender",subge)
            localStorage.setItem("subject",sub)
            localStorage.setItem("reason",reason)
            localStorage.setItem("fromdate",fd)
            localStorage.setItem("todate",td)
            localStorage.setItem("numberofdays",NOD) 
        }
        function output()
        {
            var dt=localStorage.getItem("date")
            var ton=localStorage.getItem("toname")
            var toa=localStorage.getItem("toadd")
            var fromn=localStorage.getItem("fromnm")
            var froma=localStorage.getItem("fromadd")
            var subge=localStorage.getItem("subgender")
            var sub=localStorage.getItem("subject")
            var reason=localStorage.getItem("reason")
            var fromdate=localStorage.getItem("fromdate")
            var todate=localStorage.getItem("todate")
            var numberofdays=localStorage.getItem("numberofdays")
            var backgrcolor=localStorage.getItem("Backgroundcolor")
            var headingcolor=localStorage.getItem("headingcolor")
            var hfs=localStorage.getItem("headingfs")
            var samplecolor=localStorage.getItem("samplecolor")
            var samplefs=localStorage.getItem("samplefs")

            document.getElementById("date").innerHTML=dt
            document.getElementById("tonm").innerHTML=ton
            document.getElementById("tona").innerHTML=toa
            document.getElementById("fromnm").innerHTML=fromn
            document.getElementById("froma").innerHTML=froma
            document.getElementById("sug").innerHTML="Dear "+ subge
            document.getElementById("su").innerHTML="Sub: "+ sub
            document.getElementById("Reason").innerHTML=reason
            document.getElementById("numberofdays").innerHTML=numberofdays
            document.getElementById("frmd").innerHTML=fromdate
            document.getElementById("tod").innerHTML=todate
            document.getElementById("fromnm1").innerHTML=fromn
            document.getElementById("background").style.backgroundColor=backgrcolor
            document.getElementById("headin").style.color=headingcolor
            document.getElementById("headin").style.fontSize=hfs+"px"
            var a=document.getElementsByClassName("sam")
            var l=document.getElementsByClassName("sam").length
            document.getElementById("tod1").innerHTML=todate
            for(i=0;i<=l-1;i++)
            {
                a[i].style.color=samplecolor
            }
            for(i=0;i<=l-1;i++)
            {
                a[i].style.fontSize=samplefs+"px"
            }
        }
        