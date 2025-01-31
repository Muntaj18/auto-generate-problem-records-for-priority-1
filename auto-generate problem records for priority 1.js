(function executeRule(current, previous /*null when async*/) {


    var gr = new GlideRecord('problem');

    gr.initialize();

    gr.short_description = current.short_description;

    gr.insert();
})(current, previous);