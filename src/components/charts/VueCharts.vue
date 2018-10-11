<template>
<div>
    <redoffice-widget :headerText="'Line chart'">
        <template slot="widgetBody">
            <redoffice-chart :chartData="lineData" type="line"></redoffice-chart>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Donut chart'" class='mt-5'>
        <template slot="widgetBody">
            <redoffice-chart :chartData="donutData" type="donut"></redoffice-chart>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Pie chart'" class='mt-5'>
        <template slot="widgetBody">
            <redoffice-chart :chartData="pieData" type="pie"></redoffice-chart>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Horizontal bar chart'" class='mt-5'>
        <template slot="widgetBody">
            <redoffice-chart :chartData="horizontalData" type="horizontal-bar"></redoffice-chart>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Vertical bar chart'" class='mt-5'>
        <template slot="widgetBody">
            <redoffice-chart :chartData="verticalData" type="vertical-bar"></redoffice-chart>
        </template>
    </redoffice-widget>
</div>
</template>

<script>
export default {
    mounted(){
        this.colorGen = this.dealColors()
    },
    computed: {
        lineData(){
            let pallete = this.dealColors(10)
            let colors = Array.from(pallete)
            return {
                labels: ['1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
                datasets: [{
                    label: 'GBP of Mars',
                    backgroundColor: '#59641a80',
                    borderColor: 'transparent',
                    data: [678, 680, 615, 665, 690, 701, 687, 689]
                },{
                    label: 'GBP of Mercury',
                    backgroundColor: '#9a645e80',
                    borderColor: 'transparent',
                    data: [900, 880, 715, 365, 190, 9, 13, 18]
                }]
            }
        },
        pieData(){
            let pallete = this.dealColors(4, 2)
            let colors = Array.from(pallete)
            return {
                labels: ['Kuwait', 'Egypt', 'Romania', 'Italy'],
                datasets: [{
                    label: 'Users',
                    backgroundColor: colors,
                    data: [99, 100, 432, 590]
                }]
            }
        },
        donutData(){
            let pallete = this.dealColors(5, 6)
            let colors = Array.from(pallete)
            return {
                labels: ['Bulgaria', 'Kazakhstan', 'Bolivia', 'New Zealand', 'Japan'],
                datasets: [{
                    label: 'Web traffic [PB/m]',
                    backgroundColor: colors,
                    data: [23, 29, 39, 49, 130]
                }]
            }
        },
        horizontalData(){
            let pallete = this.dealColors(2, 11)
            let colors = Array.from(pallete)
            return {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Incoming traffic',
                        backgroundColor: colors[0],
                        borderColor: 'transparent',
                        data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53]
                    },
                    {
                        label: 'Outgoing traffic',
                        backgroundColor: colors[1],
                        borderColor: 'transparent',
                        data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93]
                        
                    }
                ]
            }
        },
        verticalData(){
            let pallete = this.dealColors(2, 15)
            let colors = Array.from(pallete)
            return {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Incoming traffic',
                        backgroundColor: colors[0],
                        borderColor: 'transparent',
                        data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53]
                    },
                    {
                        label: 'Outgoing traffic',
                        backgroundColor: colors[1],
                        borderColor: 'transparent',
                        data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93]
                        
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss">

</style>
