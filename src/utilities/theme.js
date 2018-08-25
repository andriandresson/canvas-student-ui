const BaseColors = {
    base: {
        fontSize: "1rem",
        fontColorPrimary: "rgba(0,0,0,.68)",
        fontColorSecondary: "rgba(0,0,0,.48)",
        backgroundColor: "#F9F9F9"
    }
}

const Theme = Object.assign(BaseColors, {
    dashboard: {
        header: {
            backgroundColor: "#FFFFFF",
            fontColorPrimary: `${BaseColors.base.fontColorPrimary}`,
            fontColorSecondary: `${BaseColors.base.fontColorSecondary}`
        },
        assignments: {
            label: {
                overdue: '#c90019',
                duetoday: '#eb9e0c',
                duethisweek: 'rgba(0,0,0,.48)'
            }
        }
    },
    sidebar:{
        width: "84px"
    }
});

export default Theme;