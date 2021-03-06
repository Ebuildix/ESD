'use strict';
// Class definition
KTDatatableDataLocalDemo
var KTDatatableDataLocalDemo = function() {
    // Private functions

    var demo = function() {

        var datatable = $('.kt-datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                // type : 'local',
                // source : dataJSONArray,
                source: {

                    read: {
                        url: '/SDmall/data.php',
                        map: function(raw) {

                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {

                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },

                },
                pageSize: 10, // display 20 records per page
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true,
            },

            // layout definition
            layout: {
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false, // display/hide footer

                class : 'table-striped myFavouriteTable ',
                customScrollbar : false,
            },
            // toolbar
            toolbar: {
                // toolbar placement can be at top or bottom or both top and bottom repeated
                placement: [],

                // toolbar items
                items: {
                    // pagination
                    // pagination: {
                    //     // page size select
                    //     pageSizeSelect: [5, 10, 20, 30, 50], // display dropdown to select pagination size. -1 is used for "ALl" option
                    // },
                },
                icons: {
                    sort: {
                        asc: 'la la-arrow-up',
                        desc: 'la la-arrow-down',


                    },
                    rowDetail: {
                        expand: 'fa fa-caret-down',
                        collapse: 'fa fa-caret-right'
                    },
                }
            },

            rows: {
                autoHide: false,
                afterTemplate: function (row, data, index) {
                    // if(index) return ;
                    $('tbody .kt-datatable__row').css({
                        'margin-top' : 20,
                        'margin-bottom' : 20,

                        'border-color' : 'none',

                        'box-shadow': '5px 8px rgba(140, 140, 140, 0.05)',
                    });

                    var th = $('th');
                    if(index==0 ) {
                        // for(var i = 1; i < 9; i ++ ) {
                        //     var cel = $(":nth-child("+i+")", th);
                        //     cel.append('<i class = "flaticon2-sort"> </i>');
                        // }
                    }
                    var cel = $(":first", row);

                    cel.on('click', function(){
                        var span = $(":first", cel);
                        span = $(":first", span);
                        if(span.hasClass('la-star-o')) {
                            span.removeClass('la-star-o');
                            span.addClass('la-star');
                        } else {
                            span.removeClass('la-star');
                            span.addClass('la-star-o');
                        }


                    });
                }
            },

            // column sorting
            sortable: true,

            pagination: false,



            // columns definition
            columns: [
                {
                    field: '',
                    title: '',
                    sortable: false,
                    width: 20,
                    type: 'number',

                    // locked: {left: 'xl'},
                    template: function() {
                        return '<span class="la la-star-o la-lg"></span>';
                    },

                }, {
                    field: 'sport',
                    title: `<span>SPORT<i class = "flaticon2-sort"></i></span>`,
                    // locked: {left: 'xl'},
                }, {
                    field: 'country',
                    title: 'COUNTRY<i class = "flaticon2-sort"></i>',

                }, {
                    field: 'competition',
                    title: 'COMPETITION<i class = "flaticon2-sort"></i>',
                    responsive: {
                        visible: 'md',
                        hidden: 'lg'
                    },

                }, {
                    field: 'season',
                    title: 'SEASON<i class = "flaticon2-sort"></i>',


                    responsive: {
                        visible: 'md',
                        hidden: 'lg'
                    }
                }, {
                    field: 'matchSummary',
                    title: 'MATCH&nbspSUMMARY<i class = "flaticon2-sort"></i>',
                    width : 170,

                }, {
                    field: 'detailedStats',
                    title: 'DETAILED STATS<i class = "flaticon2-sort"></i>',

                }, {
                    field: 'lastUpdate',
                    title: 'LAST UPDATE<i class = "flaticon2-sort"></i>',
                    autoHide: false,
                    type: 'date',
                    // callback function support for column rendering

                }, {
                    field: 'price',
                    title: 'PRICE<i class = "flaticon2-sort"></i>',

                }, {
                    field: 'view',
                    title: '',
                    sortable: false,
                    width: 110,
                    autoHide: false,
                    template: function() {
                        return '<a href = "#"><span class="viewSample">View Sample</span></a>';
                    },
                }, {
                    field: 'add',
                    title: '',
                    sortable: false,
                    width: 160,

                    autoHide: false,
                    template: function() {
                        return '<a href = "#" class="btn btn-md btn-add-cart"> Download&nbsp<i class="flaticon2-download-2"></i></a>';
                    },
                }],
        });

    };


    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();

        },

    };
}();


jQuery(document).ready(function() {
    KTDatatableDataLocalDemo.init();

});