<script setup lang="ts">
    
</script>

<template>
    <div id="sidebar">
        <div class="sidebar_head">
            <p>CRM PANEL</p>
            <hr>
        </div>

        <ul class="sidebar_menu">
           
            <li>
                <router-link class="sidebar_menu_link" to="/"> home </router-link>
            </li>
            <li>
                <router-link class="sidebar_menu_link" to="/clients"> clients </router-link>
            </li>
            <li>
                <router-link class="sidebar_menu_link" to="/teacher">teacher</router-link>
            </li>
            <li>
                <router-link class="sidebar_menu_link" to="/groups">groups</router-link>
            </li>
            <li>
                <router-link class="sidebar_menu_link" to="/attendance">attendance</router-link>
            </li>
        </ul>
    </div>
</template>


<style lang="css" scoped>
    #sidebar {
        width: 50vh;
        min-height: 100;
        background-color: rgba(47, 73, 209, 1);
    }

    .sidebar_head {
        color: rgba(255, 255, 255, 1);
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        padding: 20px;
    }

    .sidebar_head hr {
        margin-top: 10px;
    }
    
    .sidebar_menu li {
        margin: 10px auto;
        list-style-type: none;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        width: 40vh;
    }

    /* .sidebar_menu li:hover {
        background-color: aqua;
        cursor: pointer;
    } */

    .sidebar_menu_link {
        color: rgba(255, 255, 255, 1);
        width: full;
        display: block;
        text-decoration: none;
        padding: 10px 0;
        border-radius: 20px;
    }

    .sidebar_menu_link:hover {
        background-color: rgba(1, 38, 95, 1);

    }
    
    .router-link-active {
        background-color: rgba(1, 38, 95, 1);
    }


</style>